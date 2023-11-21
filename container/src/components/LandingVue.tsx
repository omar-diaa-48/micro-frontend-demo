import { useEffect, useRef } from "react"
import { mount } from "landing-vue/LandingApp"

export default () => {
    const ref = useRef(null)
    useEffect(() => {
        mount(ref.current)
    }, [])

    return (
        <div ref={ref} />
    )
}