import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./D1Farmer.css";
import personal from "../assets/images/personal-detail-1.svg";
import right from "../assets/icons/right-1-2.svg";

const D1Farmer = () => {
	const [selectedOption, setSelectedOption] = useState("");
	const navigate = useNavigate();

	const handleOptionChange = (option) => {
		setSelectedOption(option);
	};

	const handleContinue = () => {
		navigate("/d2farmer"); // Navigate to D2Farmer component
	};

	return (
		<div className="d-1-farmer">
			<section className="personalization">
				<div className="movie-card-parent">
					<div className="movie-card">
						<img
							className="personal-detail-1-icon"
							loading="lazy"
							alt=""
							src={personal}
						/>
					</div>
					<div className="insights-header-parent">
						<div className="insights-header">
							<h1 className="personal-details">Personal details</h1>
							<div className="discover-a-diverse">
								Discover a diverse array of valuable insights and updates shared
								by our community on GreenNet.
							</div>
						</div>
						<div className="progress">
							<div className="progress-row-one">
								<div className="progress-items-one">
									<div className="progress-element-one">1</div>
								</div>
								<div className="progress-items-two">
									<div className="progress-element-two" />
								</div>
							</div>
							<div className="progress-row-one1">
								<div className="wrapper">
									<div className="div">2</div>
								</div>
								<div className="progress-row-one-inner">
									<div className="frame-child" />
								</div>
							</div>
							<div className="progress-row-one1">
								<div className="wrapper">
									<div className="div">3</div>
								</div>
								<div className="progress-row-one-inner">
									<div className="frame-child" />
								</div>
							</div>

							<div className="progress-caption">
								<div className="div2">4</div>
							</div>
						</div>
					</div>
				</div>
				<div className="frame-parent">
					<div className="which-best-describes-you-wrapper">
						<div className="which-best-describes">
							Which best describes you?
						</div>
					</div>
					<div className="occupation-options">
						<div
							className={`farmer-trader-options ${
								selectedOption === "Farmer" ? "selected-option" : ""
							}`}
							onClick={() => handleOptionChange("Farmer")}
						>
							<input
								className="farmer-trader-items"
								type="checkbox"
								checked={selectedOption === "Farmer"}
								readOnly
							/>
							<a className="farmer">Farmer</a>
						</div>
						<div
							className={`farmer-trader-options1 ${
								selectedOption === "Trader" ? "selected-option" : ""
							}`}
							onClick={() => handleOptionChange("Trader")}
						>
							<input
								className="frame-input"
								type="checkbox"
								checked={selectedOption === "Trader"}
								readOnly
							/>
							<div className="trader">Trader</div>
						</div>
						<div
							className={`official-option ${
								selectedOption === "Gov’t Official" ? "selected-option" : ""
							}`}
							onClick={() => handleOptionChange("Gov’t Official")}
						>
							<input
								className="official-icon"
								type="checkbox"
								checked={selectedOption === "Gov’t Official"}
								readOnly
							/>
							<div className="govt-official">Gov’t Official</div>
						</div>
					</div>
				</div>
				<div className="right-1-parent">
					<img className="right-1-icon" alt="" src="/right-1.svg" />
					<div className="back">Back</div>
				</div>
				<div className="continue-button-wrapper">
					<button className="continue-button" onClick={handleContinue}>
						<b className="continue">Continue</b>
						<img className="right-1-icon1" alt="" src={right} />
					</button>
				</div>
			</section>
		</div>
	);
};

export default D1Farmer;
