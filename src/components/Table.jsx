const Table = ({ children }) => {
    return (
        <table>{children}</table>
    )
}
const THead = ({ children }) => {
    return (
        <thead>
            <tr>
                {children}
            </tr>
        </thead>
    )
}
const TBody = ({ children }) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}
const TFoot = ({ children }) => {
    return (
        <tfoot>
            {children}
        </tfoot>
    )
}
Table.Head = THead;
Table.Body = TBody;
Table.Foot = TFoot;
export default Table
