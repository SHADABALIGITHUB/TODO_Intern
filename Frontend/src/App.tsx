import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout.tsx";
import Home from "./Pages/Home.tsx"
import CreateNewTask from "./Pages/createNewTask.tsx";
import Delete from "./Pages/DeletedItems.tsx";
import CompletedTask from "./Pages/CompletedTask.tsx";
function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="completed" element={<CompletedTask/>}/>
                    <Route path="create" element={<CreateNewTask/>}/>
                    <Route path="delete" element={<Delete/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
