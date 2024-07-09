import React from "react"
import { useTestStore } from "../store/TestStore"

export default function ZResultPage(){

    const testStore = useTestStore();


    return (
        <div>
            <h2>결과 : {testStore.value}</h2>
        </div>
    )
}