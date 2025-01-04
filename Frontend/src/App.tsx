import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout.tsx";
import Home from "./Pages/Home.tsx"

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="profile" element={<h2>Profile user </h2>}/>
                    <Route path="edit" element={<h2> Welcome editing mode</h2>}/>
                    <Route path="create" element={<h2> About use we Todo management </h2>}/>
                    <Route path="delete" element={<h2> delete options here </h2>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
