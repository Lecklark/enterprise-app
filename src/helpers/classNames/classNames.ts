type TMods = Record<string, boolean | string>

export function classNames(cls: string, mods: TMods, additional: string[]):string {
    const modsCls = Object.entries(mods)
        .filter(([_,value]) => Boolean(value))
        .map(([cls])=> cls);

    return [ cls, ...modsCls, ...additional ].join(' ');
}