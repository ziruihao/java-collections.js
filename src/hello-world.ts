/**
 * @interface
 * Basic characteristics of a computer program.
 */
export interface IComputerProgram {
    /** A unique identifier assigned on creation. */
    id: string;
    /** An optional name for interfacing with human beans. */
    name?: string;
}

/**
 * Says hello to the world.
 * @param {IComputerProgram} program This program's name.
 * @returns {string} A greeting message to the world.
 */
function helloWorld({id, name}: IComputerProgram): string {
    // log computer program execution
    console.timeLog(id)
    return `Hello world! My name is ${name ?? '... wait I do not have one.'}`
}

export default helloWorld