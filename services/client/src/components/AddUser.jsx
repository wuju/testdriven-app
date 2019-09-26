import React from 'react';

const AddUser = (props) => {
  return (
    <form>
      <div className="field">
        <input
          name="username"
          className="input is-large"
          type="text"
          placeholder="Enter a user name"
          required
          />
      </div>
      <div className="field">
        <input
          name="email"
          className="input is-large"
          type="text"
          placeholder="Enter an email address"
          required
          />
      </div>
      <div className="field">
      <input
        type="submit"
        className="button is-primary is-large is-fullwidth"
        value="Submit"
        />
      </div>
    </form>
  )
};

export default AddUser;