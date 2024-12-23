import { Link, useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/Textinputt/TextinputtContainer";



function StartGame(){

    const navigate=useNavigate();

    function handleSubmit(value){
        navigate('/play',{state:{wordSelected:value}});
    }

return (
<div>




    <h1>start game</h1>
   <Link to="/play">play game</Link>

   <TextInputFormContainer onSubmit={handleSubmit} />
</div>

);


}
export default StartGame;