import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "copy-to-clipboard";
import { isEqual } from "lodash";
import { roundToTwoDecimals } from "../../utils";
import Chart from "chart.js";
import "chartjs-plugin-dragdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCopy, faUndo } from "@fortawesome/pro-regular-svg-icons";
import { faQuestionCircle } from "@fortawesome/pro-solid-svg-icons";
import "./GradingHometask1.css";

class GradingHometask1 extends Component {
  constructor() {
    super();
    this.state = {
      labels: [
        "Repository management",
        "Project management",
        "git + GitFlow",
        "HTML / CSS / JS",
        "UI / UX",
        "Awesomeness"
      ],
      datasets: [{
        label: "You",
        data: [6, 5, 5, 5, 2, 0],
        dragData: true,
        borderColor: "rgba(0, 173, 238, 1)",
        backgroundColor: "rgba(0, 173, 238, 0.125)",
        pointBorderColor: "white",
        pointBackgroundColor: context => context.dataIndex % 2 === 0 ? "rgb(255, 199, 18)" : "rgb(236, 24, 72)",
        pointHoverBorderColor: "white",
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 3,
        pointHoverBorderWidth: 3,
        pointHitRadius: 30
      }, {
        label: "Joe Average",
        data: [6, 5, 5, 5, 2, 0],
        dragData: false,
        borderColor: "rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        pointRadius: 0,
        pointHitRadius: 0,
        pointHoverRadius: 0
      }]
    }
    this.createOptions = this.createOptions.bind(this);
    this.resetMyGrades = this.resetMyGrades.bind(this);
    this.copyGradesByCategories = this.copyGradesByCategories.bind(this);
  }

  copyGradesByCategories(grades) {
    const feedbackStarters = [    
      `по категоріях оцінювання цієї домашки отримуєш такі бали: $1.`,
      `по категоріях (4-ий розділ конспекту, радар-чарт під спойлером) бали такі — $1.`,
      `$1 вийшло по категоріях (4-ий розділ конспекту, радар-чарт під спойлером).`,
      `$1 (категорії описані в 4-му розділі конспекту).`,
      `радар-чарт один на всіх (в 4-му розділі в конспекті), тому поїхали по ньому — $1.`,
      `$1 в мене виходить по тих категоріях (там в 4-му розділі конспекту є радар-чарт з категоріями).`,
      `знаєш той чарт в 4-му розділі конспекту, під спойлером? поїхали — $1.`,
      `по категоріях виходить $1 (це ті, що в 4-му розділі конспекту, під спойлером чарт є).`,
      `$1 (спайдервеб-чарт є під спойлером в 4-му розділі конспекту).`,
      `по категоріях з 4-го розділу (там спайдервеб-чарт є під спойлером) — $1.`,
      `окей, в нас там є чарт в 4-му розділі і я все рівно маю по ньому піти — $1.`,
      `$1 по радар-чарту з 4-го розділу конспекту.`,
      `по радар-чарту (4-ий блок, конспект, під спойлером) — $1.`
    ];
    copy(feedbackStarters[Math.floor(Math.random() * (feedbackStarters.length - 1))].replace("$1", grades.join('-')));
  }

  createOptions() {
    return {
      type: "radar",
      data: { ...this.state },
      options: {
        aspectRatio: 1,
        dragData: true,
        dragDataRound: 0,
        onDragEnd: (event, datasetIndex, index, value) => this.setState(state => {
          const newState = { ...state };
          newState.datasets[datasetIndex].data = [
            ...state.datasets[datasetIndex].data.slice(0, index),
            value,
            ...state.datasets[datasetIndex].data.slice(index + 1)
          ];
          return newState;
        }),
        layout: {
          padding: {
            left: 16,
            right: 16,
            top: 16,
            bottom: 16
          }
        },
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        scale: {
          ticks: {
            max: 10,
            min: 0,
            stepSize: 1,
            fontSize: 13,
            fontStyle: "bold",
            fontColor: "#999999"
          },
          pointLabels: {
            fontSize: 16,
            fontStyle: "bold"
          }
        },
        scaleLabel: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    }
  }

  componentDidMount() {
    this.chart = new Chart(this.el.getContext("2d"), this.createOptions());
  }
    
  componentDidUpdate() {
    if (this.chart) {
      this.chart.update(this.createOptions());
    }
  }

  resetMyGrades() {
    this.setState(state => {
      const newState = { ...state };
      newState.datasets[0].data = [...state.datasets[1].data];
      return newState;
    });
  }
  
  render() {
    const myGrades = this.state.datasets[0].data;
    const myGradesAverage = myGrades.reduce((memo, value) => memo += value, 0) / myGrades.length;
    const defaultGrades = this.state.datasets[1].data;
    const areMyGradesDefault = isEqual(myGrades, defaultGrades);
    return (
      <div className="grading-hometask">
        <div className="accordion">
          <input type="checkbox" id="grading-hometask" name="accordion-checkbox" hidden />
          <label className="accordion-header" htmlFor="grading-hometask">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span className="title"><strong>Як буде оцінюватися проект</strong></span>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} fixedWidth />
            </span>
          </label>
          <div className="accordion-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  Завдання комплексне, тому й оцінюватися буде в шести напрямках, а середнє арифметичне тих шести чисел і буде кінцевою оцінкою:
                </div>
              </div>
              <small>
                <div className="columns">
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong>Repository management</strong>
                            <span className="text-gray"><small>#1</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        <p>Репозиторій створений, топіки додані, README.md на місці, а GitHub Pages увімкнено. Може навіть є якась Wiki? А якщо знайду?!</p>
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong>Project management</strong>
                            <span className="text-gray"><small>#2</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        Проекти заведені, майлстоуни визначені, таски створюються, проблеми описуються, лейби прикріплюються.
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong>
                              <code>git</code>
                              <span style={{ fontWeight: 300 }}> + </span>
                              GitFlow
                            </strong>
                            <span className="text-gray"><small>#3</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        Робота ведеться в декількох гілках, кожна інтуїтивно зрозуміла, а для їх злиття у основну гілку використовуються pull request-и. Може навіть комміти мають нормальні назви.
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <span>
                              <span style={{ fontWeight: 900 }}>HTML</span>
                              <span style={{ fontWeight: 300 }}> / </span>
                              <strong>CSS</strong>
                              <span style={{ fontWeight: 300 }}> / </span>
                              JS
                            </span>
                            <span className="text-gray"><small>#4</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        Майстер копіпасту 80-го рівня — валідна HTML-розмітка, CSS не пошакалений, а JS (якщо є) робить нормальні речі.
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <span>
                              <strong>UI</strong>
                              <span style={{ fontWeight: 300 }}> / </span>
                              <span style={{ fontWeight: 900 }}>UX</span>
                            </span>
                            <span className="text-gray"><small>#5</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        Сторінка доступна, інформативна, зручна, читабельна, чиста, приємна, цікава, адаптивна, швидка.
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong><span role="img" aria-label="rainbow">🌈</span>A-a-a-A-A-aweso-o-O-O-oomene-e-E-E-ess!</strong>
                            <span className="text-gray"><small>#6</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        Творчість, старанність, увага до деталей, гумор, оригінальність, "што-о-о-о?!".
                      </div>
                    </div>
                  </div>
                </div>
              </small>
            </div>
            <div className="radar-chart">
              <canvas ref={el => this.el = el} />
              {
                !areMyGradesDefault &&
                <button className="reset-grades" onClick={this.resetMyGrades}>
                  <FontAwesomeIcon icon={faUndo} className="icon" /> Reset
                </button>
              }
              <button className="grades-by-categories" onClick={() => this.copyGradesByCategories(myGrades)}>
                <FontAwesomeIcon icon={faCopy} className="icon" />
              </button>
              <CopyToClipboard text={roundToTwoDecimals(myGradesAverage)}>
                <button className="final-grade">
                  {roundToTwoDecimals(myGradesAverage)}
                  <FontAwesomeIcon icon={faCopy} className="icon" />
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GradingHometask1;