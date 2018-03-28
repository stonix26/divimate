import React, { Component } from 'react';
import firebase from './../firebase';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      authorName: '',
      serviceType: 'Choose Service',
      progressStatus: 'Choose Progress Status',
      filePath: '',
      designer: 'Choose Designer',
      amazonLink: '',
      notes: ''

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const authorsRef = firebase.database().ref('authors');
    const author = {
      authorName: this.state.authorName,
      serviceType: this.state.serviceType,
      progressStatus: this.state.progressStatus,
      filePath: this.state.filePath,
      designer: this.state.designer,
      amazonLink: this.state.amazonLink,
      notes: this.state.notes
    }
    authorsRef.push(author);
    this.setState({
      authorName: '',
      serviceType: 'Choose Service',
      progressStatus: 'Choose Progress Status',
      filePath: '',
      designer: 'Choose Designer',
      amazonLink: '',
      notes: ''
    });
  }

  render() {
    return (
      <div className="container-fluid parent-container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card bg-orange border-blue">
              <div className="card-header bg-dark-blue text-white text-center border-blue">Add New Author</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit} >
                  <div className="form-group">
                    <label>Author's Name</label>
                    <input
                      type="text"
                      name="authorName"
                      className="form-control"
                      placeholder="John Doe"
                      onChange={this.handleChange}
                      value={this.state.authorName}
                    />
                  </div>
                  <div className="form-group">
                    <label>Service Type</label>
                    <select
                      name="serviceType"
                      className="form-control"
                      onChange={this.handleChange}
                      value={this.state.serviceType}>
                      <option value="Choose Service">Choose Service</option>
                      <optgroup label="Dynamic Website">Dynamic Website</optgroup>
                      <option value="Basic">Basic</option>
                      <option value="Delux">Delux</option>
                      <option value="Premium">Premium</option>
                      <optgroup label="OBP">OBP</optgroup>
                      <option value="Silver">Silver</option>
                      <option value="Platinum">Platinum</option>
                      <option value="Gold">Gold</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Progress Status</label>
                    <select
                      name="progressStatus"
                      className="form-control"
                      onChange={this.handleChange}
                      value={this.state.progressStatus}>
                      <option value="Choose Progress Status">Choose Progress Status</option>
                      <option value="Template (Design Draft Creation)">Template (Design Draft Creation)</option>
                      <option value="Demo (Mockup and Contents Creation)">Demo (Mockup and Contents Creation)</option>
                      <option value="Live">Live</option>
                      <option value="Launched">Launched</option>
                      <option value="End of Service">End of Service</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>File Path</label>
                    <input type="text"
                      name="filePath"
                      className="form-control"
                      placeholder="\\file02\ReadersMagnet"
                      onChange={this.handleChange}
                      value={this.state.filePath}
                    />
                  </div>
                  <div className="form-group">
                    <label>Designer</label>
                    <select
                      name="designer"
                      className="form-control"
                      onChange={this.handleChange}
                      value={this.state.designer}>
                      <option value="Choose Designer">Choose Designer</option>
                      <option value="Jess Andrew Muana">Jess Andrew Muana</option>
                      <option value="Randy Santillan">Randy Santillan</option>
                      <option value="Roy Ruba">Roy Ruba</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Amazon Link</label>
                    <input
                      name="amazonLink"
                      className="form-control"
                      placeholder="https://www.amazon.com/"
                      onChange={this.handleChange}
                      value={this.state.amazonLink}
                    />
                  </div>
                  <div className="form-group">
                    <label>Notes</label>
                    <textarea
                      name="notes"
                      className="form-control"
                      rows="6"
                      onChange={this.handleChange}
                      value={this.state.notes}
                    />
                  </div>
                  <div className="form-row text-center">
                    <div className="col">
                      <button className="btn btn-custom text-white">Save Author</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <table className="table table-hover">
              <thead className="bg-dark-blue text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Author's Name</th>
                  <th scope="col">Service Type</th>
                  <th scope="col">Progress Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>John Doe</td>
                  <td>Basic</td>
                  <td>Live</td>
                  <td>
                    <div className="btn-group btn-group-sm" role="group" aria-label="...">
                      <button type="button" className="btn btn-secondary">View</button>
                      <button type="button" className="btn btn-dark">Edit</button>
                      <button type="button" className="btn btn-secondary">Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Larry Byrd</td>
                  <td>Delux</td>
                  <td>Live</td>
                  <td>
                    <div className="btn-group btn-group-sm" role="group" aria-label="...">
                      <button type="button" className="btn btn-secondary">View</button>
                      <button type="button" className="btn btn-dark">Edit</button>
                      <button type="button" className="btn btn-secondary">Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sam Smith</td>
                  <td>Silver</td>
                  <td>Demo</td>
                  <td>
                    <div className="btn-group btn-group-sm" role="group" aria-label="...">
                      <button type="button" className="btn btn-secondary">View</button>
                      <button type="button" className="btn btn-dark">Edit</button>
                      <button type="button" className="btn btn-secondary">Delete</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>John Skomburdis</td>
                  <td>Basic</td>
                  <td>Live</td>
                  <td>
                    <div className="btn-group btn-group-sm" role="group" aria-label="...">
                      <button type="button" className="btn btn-secondary">View</button>
                      <button type="button" className="btn btn-dark">Edit</button>
                      <button type="button" className="btn btn-secondary">Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
