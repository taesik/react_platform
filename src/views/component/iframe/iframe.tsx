

export const Component = () => {
  const iframePart = () =>{
    return {
      __html: `<iframe src="" width="50%" height="50%"></iframe>`,
    };
  }

  return (
    <div dangerouslySetInnerHTML={iframePart()} />
  )
}
