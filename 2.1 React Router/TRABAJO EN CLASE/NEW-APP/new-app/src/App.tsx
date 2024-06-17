import React from "react";
import { Refine } from "@refinedev/core";
import { notificationProvider, Layout } from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import "@refinedev/antd/dist/reset.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// Importamos los componentes de películas desde el índice de la carpeta
import { MovieList, MovieCreate, MovieEdit } from "./pages";
// Importamos los componentes de escenas desde el índice de la carpeta
import { SceneList, SceneCreate, SceneEdit } from "./pages/scenes";
// Importamos los componentes de personajes desde el índice de la carpeta
import {
    CharacterList,
    CharacterCreate,
    CharacterEdit,
} from "./pages/characters";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Refine
                dataProvider={dataProvider("http://localhost:8081", axiosInstance)}
                notificationProvider={notificationProvider}
                Layout={Layout}
                resources={[
                    {
                        name: "movies",
                        list: MovieList,
                        create: MovieCreate,
                        edit: MovieEdit,
                    },
                    {
                        name: "scenes",
                        list: SceneList,
                        create: SceneCreate,
                        edit: SceneEdit,
                    },
                    {
                        name: "characters",
                        list: CharacterList,
                        create: CharacterCreate,
                        edit: CharacterEdit,
                    },
                ]}
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    useNewQueryKeys: true,
                    projectId: "your_project_id_here", 
                }}
            />
            
            <Routes>
                <Route path="/movies">
                    <Route index element={<MovieList />} />
                    <Route path="create" element={<MovieCreate />} />
                    <Route path="edit/:id" element={<MovieEdit />} />
                </Route>
                <Route path="/scenes">
                    <Route index element={<SceneList />} />
                    <Route path="create" element={<SceneCreate />} />
                    <Route path="edit/:id" element={<SceneEdit />} />
                </Route>
                <Route path="/characters">
                    <Route index element={<CharacterList />} />
                    <Route path="create" element={<CharacterCreate />} />
                    <Route path="edit/:id" element={<CharacterEdit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
