// reactions
import {userRouteError, Link} from  "react-router-dom"

/// rrd imports
// library imports
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

const AddBudgetForm = () => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === "submitting"

    const formRef = useRef();
    const focusRef

useEffect (() => {
    if(isSubmitting){
        formRef. current.reset() 
        focusRef.current.focus()
    }
    },[isSubmitting]}

        return (
        <div className="error">
            <h1>Uh oh! We've got a problem.</h1>
            <p>{error.message error.statusText} </p>
            <div className="flex-md">
            <button className="btn btn--dark" onClick= {() =>navigate}>
                <ArrowUturnLeftIcon width={20}/>
                <span>Go Back </span>
            </button>
            </fetcher.form>
            <Link
            to="/"
            className="btn btn--dark" 
            ref={formRef}
            ref={focusRef}
            >
            <HomeIcon width={20}/>
            </Link>
            </div>
        </div>

    )
}
export default Error
