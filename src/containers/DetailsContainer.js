import Details from "../components/Details";
import { connect } from "react-redux";

const mapStateToProps=state=>({
    arr:state.dataItems
})




export default connect(mapStateToProps) (Details);