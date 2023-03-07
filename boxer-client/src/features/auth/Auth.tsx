import { connect }                           from 'react-redux'
import { mapDispatchProps, mapStateToProps } from '../../app/store'



function Auth(props: any) {


    return (
        <>
            <div className="auth">Auth Component</div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchProps)(Auth)