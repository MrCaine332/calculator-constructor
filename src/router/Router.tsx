import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom"
import Constructor from "../pages/constructor";
import Runtime from "../pages/runtime";

const Router = () => {
	return (
		<div>
            <Routes>
                <Route path={"/constructor"} element={<Constructor />} />
                <Route path={"/runtime"} element={<Runtime />} />
                <Route path={'*'} element={<Navigate to={'/constructor'} replace />} />
            </Routes>
		</div>
	);
};

export default Router;