import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/Home"
import ProjectDetails from "../pages/ProjectDetails"
import OtherProjectDetails from "../pages/OtherProjectDetails"
import NotFound from "../pages/NotFound"

function Routers() {

    return (
        <>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<ProjectDetails />} />
                    <Route path="/other-project/:id" element={<OtherProjectDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}

export default Routers