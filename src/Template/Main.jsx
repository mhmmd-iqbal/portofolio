import React, { Component } from "react";
import Skill from "./MainMenu/Skill";
import Portofolio from "./MainMenu/Portofolio";
import Educational from "./MainMenu/Educational";
import Organizational from "./MainMenu/Organizational";
import Achievemnt from "./MainMenu/Achievement";
import Modal from "./MainMenu/Modal";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skill: [
				{
					name: "Web Programming",
					range: 90,
				},
				{
					name: "Responsive Web",
					range: 90,
				},
				{
					name: "Design Graphic",
					range: 70,
				},
				{
					name: "Public Speaking",
					range: 90,
				},
			],

			educational: [
				{
					name: "Politeknik Negeri Lhokseumawe",
					status: "Bachelor Degree",
					year: "2015-2019",
				},
				{
					name: "Sekolah Menengah Atas Negeri 1 Bireuen",
					status: "Vocational School",
					year: "2009-2011",
				},
			],

			organizational: [
				{
					name: "HIMATIK",
					status: "Main Leader",
					year: "2015-2018",
				},
				{
					name: "UKM IECLOP",
					status: "Education Division Member",
					year: "2015-2017",
				},
				{
					name: "Komunitas IT",
					status: "Education Divition Leader",
					year: "2015-2017",
				},
			],

			achievement: [
				{
					name: "KMIPN 2019",
					status: "3rd Winner",
					year: "Politeknik Caltex Riau",
				},
				{
					name: "NPEO 2018",
					status: "Finalist",
					year: "Politeknik Pos Indonesia",
				},
				{
					name: "Mahasiswa Berprestasi 2016",
					status: "4th Winner",
					year: "Politeknik Negeri Lhokseumawe",
				},
				{
					name: "Adm. System and Computer Network",
					status: "Competence Certification",
					year: "Badan Nasional Sertifikasi Profesi",
				},
			],

			portofolio: [
				{
					image: "assets/img/portofolio/abc.jpg",
					name: "Aceh Biodiversity Conservation",
					id: 1,
				},
				{
					image: "assets/img/portofolio/cekstay.jpg",
					name: "Cekstay",
					id: 2,
				},
				{
					image: "assets/img/portofolio/egampong.jpg",
					name: "E-Gampong",
					id: 3,
				},
				{
					image: "assets/img/portofolio/elapor.jpg",
					name: "E-Lapor",
					id: 4,
				},
				{
					image: "assets/img/portofolio/rekam.jpg",
					name: "Sistem Rekam Medik",
					id: 5,
				},
				{
					image: "assets/img/portofolio/simpenmas.jpg",
					name: "SIMPENMAS",
					id: 6,
				},
				{
					image: "assets/img/portofolio/ujian.jpg",
					name: "Ujian Online",
					id: 7,
				},
			],

			modalShow: false,
		};
	}

	onOpenModal = (value) => {
		console.table(value);
	};

	render() {
		return (
			<main id="main" className="site-main">
				<section id="about" className="site-section section-about text-center">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-md-offset-3">
								<h2>About</h2>
								<img
									src="assets/img/lines.svg"
									className="img-lines"
									alt="lines"
								/>
								<p>
									Hello! I'm Muhammad Iqbal, a web programmer. Graduated in 2019
									from State Polytechnic of Lhokseumawe. Passionate in
									technology and education enviroment.
								</p>
								<a
									href="https://drive.google.com/file/d/1lelP9JoKXMufefBLT25x0qqiJDDmf1uN/view?usp=sharing"
									className="btn btn-fill"
									target="_blank"
									download
								>
									Download my cv
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="site-section section-skills">
					<div className="container">
						<div className="text-center">
							<h3>My Skills</h3>
							<img
								src="assets/img/lines.svg"
								className="img-lines"
								alt="lines"
							/>
							<div className="row">
								{this.state.skill.map((data, i) => {
									return <Skill data={data}></Skill>;
								})}
							</div>
						</div>
					</div>
				</section>

				<section
					id="background"
					class="site-section section-services overlay text-center"
				>
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<h3>Educational Background</h3>
								<img src="assets/img/lines.svg" class="img-lines" alt="lines" />
							</div>
						</div>
						<div className="row">
							{this.state.educational.map((data, i) => {
								return <Educational data={data}></Educational>;
							})}
						</div>
					</div>
				</section>
				<section
					id=""
					class="site-section section-services overlay text-center"
				>
					<div class="container site-section">
						<div class="row">
							<div class="col-md-12">
								<h3>Organizational</h3>
								<img src="assets/img/lines.svg" class="img-lines" alt="lines" />
							</div>
						</div>
						<div className="row">
							{this.state.organizational.map((data, i) => {
								return <Organizational data={data}></Organizational>;
							})}
						</div>
					</div>
				</section>
				<section
					id=""
					class="site-section section-services overlay text-center"
				>
					<div class="container site-section">
						<div class="row">
							<div class="col-md-12">
								<h3>Achievements</h3>
								<img src="assets/img/lines.svg" class="img-lines" alt="lines" />
							</div>
						</div>
						<div className="row">
							{this.state.achievement.map((data, i) => {
								return <Achievemnt data={data}></Achievemnt>;
							})}
						</div>
					</div>
				</section>

				<section id="portfolio" class="site-section section-portfolio">
					<div class="container">
						<div class="text-center">
							<h3>My recent Works</h3>
							<img src="assets/img/lines.svg" class="img-lines" alt="lines" />
						</div>
						<div class="row">
							{this.state.portofolio.map((data, i) => {
								return <Portofolio data={data}></Portofolio>;
							})}
						</div>
					</div>
				</section>
				<Modal show={this.props.modalShow}></Modal>
			</main>
		);
	}
}

export default Main;
