import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import React, { useEffect } from "react";
import { useStateValue } from "./Stateprovider";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
	"pk_test_51Nd2LAJ1zAigl3fQqxMGn2I9gDvcfMGhPeoVsMBLCoVQHcD0eKfQ8kipAweCNVmWGNqFcbdz76LbMhHt05mrLI5o00cM8rsn1W"
);

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("THE USER IS >>> ", authUser);
			if (authUser) {
				// the user just logged in / the user was logged in

				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<>
			<div className="App">
				<Routes>
					<Route
						path="/orders"
						element={
							<>
								<Header />
								<Orders />
							</>
						}
					/>
					<Route
						path="/"
						element={
							<>
								{" "}
								<Header /> <Home />{" "}
							</>
						}
					/>
					<Route
						path="/login"
						element={
							<>
								{" "}
								<Login />{" "}
							</>
						}
					/>
					<Route
						path="/Checkout"
						element={
							<>
								{" "}
								<Header /> <Checkout />{" "}
							</>
						}
					/>

					<Route
						path="/payment"
						element={
							<>
								{" "}
								<Header />{" "}
								<Elements stripe={promise}>
									{" "}
									<Payment />{" "}
								</Elements>
							</>
						}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
