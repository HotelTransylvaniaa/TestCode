// import React, { Component, Fragment } from 'react';
// import Profile from './profile';

// class profileEdit extends Component {
//   
//     this.state = {
//       value: 'Deri Firgiawan',
//       opened: false,
//       username: '@infineteloop_25'
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.toggleBox = this.toggleBox.bind(this);
//   

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//     console.log(this.state.value);
//   }


//   handleSubmit(event) {
//     alert(`Update nama Berhasil menjadi ${this.state.value}`);
//     event.preventDefault();
//   }

//   toggleBox() {
//     const {opened} = this.state;
//     this.setState({
//       opened: !opened
//     });
//   }

//   render() {
//     return (
//       <Fragment>
//         <section className="section-profile">
//           <profile name={this.state.value} userName={this.state.username} title="Edit" click={this.toggleBox}/>
//           {
//             this.state.opened? <div className="card-edit-name">
//                                 <form onSubmit={this.handleSubmit}>
//                                   <label>
//                                     Name :
//                                     <input
//                                       type="text"
//                                       value={this.state.value}
//                                       onChange={this.handleChange}
//                                     />
//                                   </label>
//                 <input type="submit" value="Save" onClick={this.toggleBox}/>
//                                 </form>
//                               </div>: null
//           }
//         </section>
        
//       </Fragment>
//     );
//   }
// }

// export default profileEdit;