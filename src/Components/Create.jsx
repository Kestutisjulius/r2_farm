import { useState, useContext } from 'react';
import DataContext from './DataContext';
function Create(){

    const { setCreateAnimal } = useContext(DataContext);

    const [animal, setAnimal] = useState('');
    const [weight, setWeight] = useState('');

    const create = () => {
        setCreateAnimal({animal, weight});
        setAnimal('');
        setWeight('');
    }

    return (
        <div className="col-5">
            <div className="card mt-4">
                <div className="card-header">
                    <h2>Create</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Animal</label>
                        <input type="text" className="form-control" value={animal} onChange={event => setAnimal(event.target.value)}/>
                        <small className="form-text text-muted">Please enter some nice animal (like DONKEY)</small>
                    </div>
                    <div className="form-group">
                        <label>Animal weight</label>
                        <input type="text" className="form-control" value={weight} onChange={event => setWeight(event.target.value)}/>
                        <small className="form-text text-muted">Please enter DONKEY's weight</small>
                    </div>
                    <button type="button" className="btn btn-outline-primary" onClick={create}>Create</button>
                </div>
            </div>
        </div>
    );
}
export default Create;