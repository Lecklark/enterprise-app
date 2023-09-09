type TMods = Record<string, boolean | string>

export function classNames(cls: string, mods: TMods = {}, additional: string[] = []) {
    const modsCls = Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className);
    const additionalCls = [...additional].filter(Boolean);

    return [cls, ...modsCls, ...additionalCls].join(' ');
}
