import { IProps }                            from '../../common/interfaces/props'
import { connect }                           from 'react-redux'
import { mapDispatchProps, mapStateToProps } from '../../app/store'



const ModelViewer = ({ state, dispatch, ...props}: IProps) => {

    return (
        <div className="google_viewer">
            <div>ModelViewer</div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchProps)(ModelViewer)