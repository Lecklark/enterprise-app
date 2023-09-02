import {memo} from "react";

const Counter = ({countProps}:{countProps: string}) => {

    return(
        <div>

            <span>{countProps}</span>

        </div>
    )
}

export const CounterMemo = memo(Counter)