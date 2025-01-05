import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.tsx";
import Home from "./Pages/Home.tsx"
import CreateNewTask from "./Pages/createNewTask.tsx";
import ProgressTask from "./Pages/ProgressTask.tsx";
import CompletedTask from "./Pages/CompletedTask.tsx";
import OpenOneTodo from "./Pages/OpenOneTodo.tsx";
function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="task/:id" element={<OpenOneTodo />} />
                    <Route path="completed" element={<CompletedTask />} />
                    <Route path="create" element={<CreateNewTask />} />
                    <Route path="progress" element={<ProgressTask/>} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
