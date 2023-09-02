type TMods = Record<string, boolean | string>

export function classNames(cls: string, mods: TMods = {}, additional: string[] = []):string {
    const modsCls = Object.entries(mods)
        .filter(([_,value]) => Boolean(value))
        .map(([cls])=> cls);
    const additionalCls = [...additional].filter(Boolean);

    return [ cls, ...modsCls, ...additionalCls ].join(' ');
}