import breakpoints from "./breakpoints";

export const xs = `@media(max-widht: ${parseInt(breakpoints.xs)}px)`;
export const sm = `@media(max-widht: ${parseInt(breakpoints.sm)}px)`;
export const md = `@media(max-widht: ${parseInt(breakpoints.md)}px)`;
export const lg = `@media(max-widht: ${parseInt(breakpoints.lg)}px)`;
export const xl = `@media(max-widht: ${parseInt(breakpoints.xl)}px)`;
export const xxl = `@media(max-widht: ${parseInt(breakpoints.xxl)}px)`;

export default {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
};
