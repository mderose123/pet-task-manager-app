import React, {Component} from 'react'
import Notifications from './Notifications'
import PetList from '../pets/PetList'
import { connect } from 'react-redux'
class Dashboard extends Component {
    render() {
        const { pets} = this.props;


        return (
            <div className="dashboard container">
                <div className="row">
                    <div className ="col s12 m6">
                        <PetList pets={pets}/>
                    </div>
                    <div className ="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        pets: state.pet.pets
    }
}
export default connect(mapStateToProps)(Dashboard);