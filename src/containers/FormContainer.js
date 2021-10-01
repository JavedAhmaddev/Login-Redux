import Form from "../components/Form";
import { connect } from "react-redux";
import { addToStore } from "../service/actions/action";

const mapStateToProps=state=>({
    arr:state.dataItems
})

const mapDispatchToProps=dispatch=>({
    add:data =>dispatch(addToStore(data))   
})


export default connect(mapStateToProps, mapDispatchToProps) (Form);
