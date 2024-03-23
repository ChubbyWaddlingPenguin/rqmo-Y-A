import ButtonChoice from "../../components/ButtonChoice";
import TextBox from "../../components/TextBox";
import ButtonContainer from "../../components/ButtonChoiceController";
import doctor from "../../assets/doctor.png"

function GameView() {
    return (
        <div>
            <ButtonContainer>
                <ButtonChoice src={doctor} onClick={NaN}/>
                <ButtonChoice src={doctor} onClick={NaN}/>
            </ButtonContainer>
           <TextBox message={"This is a test"}/>
        </div>
    );
}

export default GameView;