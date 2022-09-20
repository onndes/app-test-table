import React from 'react'
import { enumStatus, enumStatusAction } from '../common/enumStatus'

const ErrorMessage = ({
    status,
    error,
    closeErrorDelete,
    reloadPage,
    type,
}) => {
    return (
        <>
            {status[enumStatusAction.FETCH] === enumStatus.LOADING &&
                type === 'inTable' && <p>Loading...</p>}
            {status[enumStatusAction.FETCH] === enumStatus.ERROR && (
                <>
                    <p>{error[enumStatusAction.FETCH].message}</p>
                    <p>{error[enumStatusAction.FETCH]?.response?.statusText}</p>
                    <button onClick={reloadPage} type="button">
                        Reload
                    </button>
                </>
            )}
            {status[enumStatusAction.EDIT] === enumStatus.ERROR &&
                type === 'inTable' && (
                    <>
                        <span>Editing failed: </span>
                        <span>{error[enumStatusAction.EDIT].message}</span>
                        <p>
                            {error[enumStatusAction.EDIT]?.response?.statusText}
                        </p>
                    </>
                )}
            {status[enumStatusAction.DELETE] === enumStatus.ERROR &&
                type === 'inTable' && (
                    <>
                        <span>Deleting failed: </span>
                        <span>{error[enumStatusAction.DELETE].message} | </span>
                        <span>
                            {
                                error[enumStatusAction.DELETE]?.response
                                    ?.statusText
                            }
                        </span>
                        {'  '}
                        <button onClick={closeErrorDelete} type="button">
                            Close error
                        </button>
                    </>
                )}
            {status[enumStatusAction.ADD] === enumStatus.ERROR &&
                type === 'modal' && (
                    <>
                        <p>Adding failed: </p>
                        <p>{error[enumStatusAction.ADD].message}</p>
                        <p>
                            {error[enumStatusAction.ADD]?.response?.statusText}
                        </p>
                    </>
                )}
        </>
    )
}

export default ErrorMessage
