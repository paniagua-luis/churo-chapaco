/* eslint-disable no-nested-ternary */
import  React, { useContext, useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Card, Header, Loading } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FooterContainer } from './footer';
import Player from '../components/player';



export function BrowseContainer({ slides }) {

    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState([]);

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);
    

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, 
            { keys: ['data.description', 'data,title', 'data.genre'], });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if(slideRows.length > 0 && searchTerm.length > 3 
            && results.length > 0 ) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }

    }, [searchTerm]);

    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoURL} /> 
                :  <Loading.ReleaseBody />}
            
            
                <Header>
                <Header.Frame>
                <Header.Group>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Churo Chapaco" />
                        
                </Header.Group>

                <Header.Group>
                    <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Header.Profile>
                        <Header.Picture src={user.photoURL} />
                        <Header.Dropdown>
                            <Header.Group>
                                <Header.Picture src={user.photoURL} />
                                <Header.TextLink>{user.displayName}</Header.TextLink>
                            </Header.Group>

                            <Header.Group>
                                <Header.TextLink onClick={() => firebase.auth().signOut()}>Cerrar sesión</Header.TextLink>
                            </Header.Group>
                        </Header.Dropdown>
                    </Header.Profile>
                </Header.Group>
            </Header.Frame>
            <Header.Banner></Header.Banner>
            </Header>
        


            
            {/* <Header src="joker1" dontShowOnSmallViewPort>
            <Header.Frame>
                <Header.Group>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Churo Chapaco" />
                    <Header.TextLink active={category === 'series' ? 
                        'true' : 'false'} onClick={() => setCategory('series')}>Series
                    </Header.TextLink>
                    <Header.TextLink active={category === 'films' ? 
                        'true' : 'false'} onClick={() => setCategory('films')}>Films
                    </Header.TextLink>
                </Header.Group>

                <Header.Group>
                    <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Header.Profile>
                        <Header.Picture src={user.photoURL} />
                        <Header.Dropdown>
                            <Header.Group>
                                <Header.Picture src={user.photoURL} />
                                <Header.TextLink>{user.displayName}</Header.TextLink>
                            </Header.Group>

                            <Header.Group>
                                <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                            </Header.Group>
                        </Header.Dropdown>
                    </Header.Profile>
                </Header.Group>

            </Header.Frame>
            <Header.Feature>
                <Header.FeatureCallOut>Ver Joker ahora</Header.FeatureCallOut>
                <Header.Text>
                Solo en medio de una multitud, el comediante fracasado Arthur Fleck busca conexión mientras recorre las calles de Gotham
                City. Arthur usa dos máscaras: la que pinta para su trabajo diario como payaso, y la que proyecta en un
                intento fallido de sentirse parte del mundo que lo rodea.
                </Header.Text>

                <Header.PlayButton>Reproducir</Header.PlayButton>
            </Header.Feature>
            </Header> */}

            {/* <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}>
                                    </Card.Image>
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>

                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src="/videos/bunny.mp4" />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group> */}
            {/* <FooterContainer /> */}
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}

//new timestamp 7:53:08, need to work on Player test and overall performance