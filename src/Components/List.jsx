import { useContext } from 'react';
import DataContext from './DataContext';
function List(){

    const { animals } = useContext(DataContext);
    
    return (
        <div className="col-7 ">
            <div className="card mt-4">
                <div className="card-header">
                    <h2>List</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                           animals.map(a => <li key={a.id} className="list-group-item"><strong>{a.animal}</strong>, weight: {a.weight} kg</li>)
                           
                        } 
                            
                    </ul>
                   
                </div>
            </div>
        </div>
    );
}
export default List;
