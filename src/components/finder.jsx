import React, { Component } from 'react';

class Finder extends Component {
    state = { 
        rowStyles: {
            border: '1px solid blue'
        }
     } 
    render() { 
        const rowStyle = {
            backgroundColor: "white",
            border: '3px solid #3d11ad',
            borderRadius: '12px'
        }

        const searchBtn = {
            backgroundColor: "#3d11ad",
            color: "white",
            border: "2px solid white",
        }
        return (
            <React.Fragment>
                <div className="container mt-5" style={rowStyle}>
                    <div className="row mb-2">
                        {/* <div className="col-1"></div> */}
                        <div className="col">
                            <h1 className='text-center'><strong>FIND LOST ITEM</strong></h1>
                        </div>
                        {/* <div className="col-1"></div> */}
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6 mt-1">
                            <div className="row text-center">
                                <div className="col-6">
                                       <select className='form-select'>
                                        <option value="" disabled selected>CATEGORY</option>
                                        <option value="1">Cat1</option>
                                        <option value="1">Cat2</option>
                                        <option value="1">Cat3</option>
                                       </select>
                                </div>
                                <div className="col-6">
                                <select className='form-select'>
                                        <option value="" disabled selected>ITEM</option>
                                        <option value="1">Cat1</option>
                                        <option value="1">Cat2</option>
                                        <option value="1">Cat3</option>
                                       </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-1">
                            <div className="row text-center">
                                <div className="col-6">
                                <select className='form-select'>
                                        <option value="" disabled selected>LOCATION</option>
                                        <option value="1">Cat1</option>
                                        <option value="1">Cat2</option>
                                        <option value="1">Cat3</option>
                                       </select>
                                </div>
                                <div className="col-6 ">
                                    <button className="btn container-fluid shadow" style={searchBtn}>SEARCH</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Finder;