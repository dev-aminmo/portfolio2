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
                    <Route path="/portfolio/" element={<Home />} />
                    <Route path="/portfolio/project/:id" element={<ProjectDetails />} />
                    <Route path="/portfolio/other-project/:id" element={<OtherProjectDetails />} />
                    <Route path="/portfolio/*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}

export default Routers