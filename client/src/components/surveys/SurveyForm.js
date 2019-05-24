import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class SurveyForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderTextarea = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea rows="2" {...input} />
      </div>
    );
  };

  renderInput = ({ input, label, meta, placeholder }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    console.log(meta);
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  renderRadio = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <div className="inline fields">
          <label>{label}</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="q1" {...input} value="Excellent" />
              <label>Excellent</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="frequency"
                {...input}
                value="Very Good"
              />
              <label>Very Good</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="frequency"
                {...input}
                value="Satisfactory"
              />
              <label>Satisfactory</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="frequency"
                {...input}
                value="Needs Improvement"
              />
              <label>Needs Improvement</label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderQ2 = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>
          2) Please tell me about one experience you had this month{" "}
          <u>at school</u> that differs from last month (REQUIRED).
        </label>
        <textarea rows="2" {...input} />
      </div>
    );
  };

  renderQ3 = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>
          3) Please tell me about one experience you had this month with your{" "}
          <u>host family</u> that differs from last month (REQUIRED).
        </label>
        <textarea rows="2" {...input} />
      </div>
    );
  };

  renderYesNo = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <div className="ui form">
          <div className="inline fields">
            <label>{label}</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" {...input} value="Yes" />
                <label>Yes</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" {...input} value="No" />
                <label>No</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Link to="/" className="btn btn-danger mb-2">
          Back
        </Link>

        <div className="two fields">
          <Field
            name="date"
            label="Date(s) of Contact (Month/Day/Year):"
            placeholder="(Month/Day/Year)"
            component={this.renderInput}
          />
          <Field
            name="coordinator"
            label="Coordinator Name:"
            placeholder="Coordinator Name"
            component={this.renderInput}
          />
        </div>
        <div className="two fields">
          <Field
            name="student"
            label="Student's Surname, Given Name:"
            placeholder="Student's Surname, Given Name:"
            component={this.renderInput}
          />
          <Field
            name="hostfamily"
            label="Host Family Name:"
            placeholder="Host Family Name:"
            component={this.renderInput}
          />
        </div>
        <h3 className="text-danger">STUDENT PROGRESS</h3>
        <Field
          name="englishname"
          component={this.renderInput}
          label="STUDENT'S ENGLISH NAME"
        />
        <Field
          name="question1"
          label="1) How are you getting along with your host family?"
          component={this.renderRadio}
        />
        <Field name="q1a" label="Comments:" component={this.renderTextarea} />
        <Field name="question2" label="" component={this.renderQ2} />
        <Field name="question3" label="" component={this.renderQ3} />
        <Field
          name="q4"
          label="4) Do you feel you are improving your conversational English?"
          component={this.renderYesNo}
        />
        <Field
          name="q4a"
          label="If yes, provide examples of how you have improved your conversational level of English:"
          component={this.renderTextarea}
        />
        <Field
          name="q4b"
          label="If no, provide examples of areas you would like to improve upon to help strengthen your level of English:"
          component={this.renderTextarea}
        />
        <Field
          name="q5"
          label="5) Have you made new American friends and interests in the community or school?"
          component={this.renderYesNo}
        />
        <Field
          name="q5a"
          label="If yes, provide details:"
          component={this.renderTextarea}
        />
        <Field
          name="q6"
          label="6) How do you feel you are doing in school?"
          component={this.renderRadio}
        />
        <Field
          name="q6a"
          component={this.renderInput}
          label="What is your favorite subject this month?"
        />
        <Field
          name="q6b"
          component={this.renderInput}
          label="What subject are you having trouble with this month?"
        />
        <Field
          name="q7"
          label="7) Did you experience any issues this month with your host family or at school?"
          component={this.renderYesNo}
        />
        <Field
          name="q7a"
          label="Is there anything you would like to talk about or nneed help with?"
          component={this.renderYesNo}
        />
        <Field
          name="q7b"
          label="Student's Comments:"
          component={this.renderTextarea}
        />
        <div className="text-danger">
          <label>
            Coordinator's comments re: Student's progress this month (Required)
          </label>
          <div>
            <Field name="q8" component={this.renderTextarea} />
          </div>
        </div>
        <button className="ui inverted primary button mt-2 mb-4">
          Save Survey
        </button>
      </form>
    );
  }
}

// const validate = formValues => {
//   const errors = {};
//   if (!formValues.date) {
//     errors.date = "You must enter a date";
//   }

//   if (!formValues.description) {
//     errors.description = "You must enter a description";
//   }
//   if (!formValues.notes) {
//     errors.notes = "You must enter a notes";
//   }

//   return errors;
// };

export default reduxForm({
  form: "surveyForm"
  // validate: validate
})(SurveyForm);
