import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import { createSecureContext } from 'tls';

class CreaturePage extends Component {
    state = {
        creatures: [],
        newCreature: {
        name: '',
        description: '',
    }
    };
    
    handleChange = event => {
        console.log('name', event.target.name);
        console.log('value', event.target.value);
        const createdNewCreature = {...this.state.newCreature};
        createdNewCreature [event.target.name] = event.target.value;
        this.setState({newCreature: createdNewCreature}); 
    };

    handleSubmit  = event => {
        event.preventDefault();
   axios.post("/api/creature").then(res => {
     console.log(res);
     this.props.history.push(`/creatures/${res.data._id}`);
        })
    }

    getAllCreatures = () => {
        axios.get("/api/creature").then(res => {
          this.setState({ creatures: res.data });
        });
    };

    componentDidMount() {
        this.getAllCreatures();
            
    }

    handleCreateCreature = () => {
        const creatureId = this.props.match.params.creatureId
        const payload = {
            name: 'Creature Name',
            description: 'Creature Description'    
        }
        axios.post(`/api/creature/${creatureId}/creature`, payload).then(res => {
            const newCreature = res.data
            const newStateCreature = [...this.state.creature, newCreature]
            this.setState({creature: newStateCreature})
        })
    }

    render() {
        return (
          <div>
     
            <h3>Monsters</h3>
            {this.state.creatures.map(creature => (
              <div key={creature._id}>
                <Link to={`/Creature/${creature._id}`}>{creature.name}</Link>
              </div>
            ))}
     
            <h3>Create new creature</h3>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  value={this.state.newCreature.name}
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="description"
                  value={this.state.newCreature.description}
                />
              </div>
              <button type="submit">Create New Creature</button>
            </form>
          </div>
        );
      }
     }

     export default CreaturePage