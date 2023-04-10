export const ErrorQuote = ({ errorMessage: { message} }) => {
    return (
    <div className="alert alert-danger text-center">
        Error: { message }
    </div>
  )
}
