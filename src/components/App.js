import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid parent-container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card bg-orange border-blue">
              <div className="card-header bg-dark-blue text-white text-center border-blue">Add New Author</div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Author's Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Service Type</label>
                    <select className="form-control">
                      <option value="Choose Service...">Choose Service...</option>
                      <option value="...">...</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Progress Status</label>
                    <select className="form-control">
                      <option value="Choose Progress Status...">Choose Progress Status...</option>
                      <option value="...">...</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>File Path</label>
                    <input type="text" className="form-control" placeholder="\\file02\ReadersMagnet" />
                  </div>
                  <div className="form-group">
                    <label>Designer</label>
                    <select className="form-control">
                      <option value="Choose Designer...">Choose Designer...</option>
                      <option value="...">...</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Amazon Link</label>
                    <input type="text" className="form-control" placeholder="https://www.amazon.com/" />
                  </div>
                  <div className="form-group">
                    <label>Notes</label>
                    <textarea className="form-control" rows="6"></textarea>
                  </div>
                  <div className="form-row text-center">
                    <div className="col">
                      <button type="submit" className="btn btn-custom text-white">Save Author</button>
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
