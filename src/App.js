import React from "react";

import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
import NavBarLog from "./Components/NavBarLog";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Market from "./Components/Market";
import HomeNavbar from "./Components/HomeNavbar";
import Sidebar from "./Components/Sidebar";
import Overview from "./Components/container";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useLocation,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import Weekly from "./Components/Weekly";
import D1Farmer from "./Components/D1Farmer"; // Import the D1Farmer component
import D2Farmer from "./Components/D2Farmer"; // Import the D2Farmer component
import D3Farmer from "./Components/D3Farmer"; // Import the D3Farmer component
import D4Farmer from "./Components/D4Farmer"; // Import the D4Farmer component

function ProtectedRoute({ children }) {
	const { isAuthenticated } = useAuth();
	return isAuthenticated ? children : <Navigate to="/sign-in" />;
}

function HomePageLayout() {
	return (
		<>
			<NavBar />
			{/* <Sidebar /> */}
			<Overview />
		</>
	);
}

function App() {
	const { isAuthenticated } = useAuth();

	return (
		<div className="App">
			<Router>
				{!isAuthenticated && <NavBar />}
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route
						path="/homepage"
						element={
							<ProtectedRoute>
								<HomePageLayout />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default function Root() {
	return (
		<AuthProvider>
			<App />
		</AuthProvider>
	);
}
