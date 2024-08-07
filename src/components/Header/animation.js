
// Mainly for Link modulke
export const forSlide = {
    initial: {x: 80},
    enter: i => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: i => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const forScale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}



// Hamberger animations
export const menuSlide = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}