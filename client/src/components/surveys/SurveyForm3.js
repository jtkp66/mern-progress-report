import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class SurveyForm3 extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderSplit = ({ input, label, meta, placeholder }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <div className="field">
          <label>{label}</label>
          <input
            type="text"
            name="shipping[first-name]"
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  };

  renderHead = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    console.log(meta);
    return (
      <div className={className}>
        <div className="two fields">
          <div className="field">
            <label>SCHOOL'S NAME:</label>
            <input
              type="text"
              name="shipping[first-name]"
              placeholder="First Name"
            />
          </div>

          <div className="field">
            <label>STUDENT'S NAME</label>
            <input
              type="text"
              name="shipping[last-name]"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
    );
  };

  renderInput = ({ input, label, meta }) => {
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
        <div className="ui form">
          <div className="inline fields">
            <label>{label}</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="frequency"
                  checked="checked"
                  onChange={() => console.log("hey")}
                />
                <label>Excellent</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Very Good</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Satisfactory</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Needs Improvement</label>
              </div>
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
        <textarea rows="2" />
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
        <textarea rows="2" />
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
                <input
                  type="radio"
                  name="frequency"
                  checked="checked"
                  onChange={() => console.log("hey")}
                />
                <label>Yes</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>No</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderTextarea = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea rows="2" />
      </div>
    );
  };

  renderCoordinatorComments = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label className="text-danger" />
        <textarea rows="2" />
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
        <h3 className="text-danger">SCHOOL PROGRESS</h3>
        <Field
          name="engname"
          component={this.renderHead}
          label="SCHOOL'S NAME"
        />
        <Field
          name="q1"
          label="1) How are you getting along with your host family?"
          component={this.renderRadio}
        />
        <Field name="q1a" label="Comments:" component={this.renderTextarea} />
        <Field name="q2" component={this.renderQ2} />
        <Field name="q3" component={this.renderQ3} />
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
            <Field name="q8" component={this.renderCoordinatorComments} />
          </div>
        </div>
        <button className="ui inverted red button mt-2 mb-4">Save</button>
        <button className="ui inverted primary button mt-2 mb-4">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  if (!formValues.notes) {
    errors.notes = "You must enter a notes";
  }

  return errors;
};

export default reduxForm({
  form: "surveyForm3",
  validate: validate
})(SurveyForm3);
