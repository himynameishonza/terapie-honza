export default function BackgroundComp() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 -z-10">
      <img
        className="absolute top-0 bottom-0 left-0 right-0 -z-10 h-full w-full animate-pulse"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          animationDuration: '14s !important',
        }}
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 bg-white/80 backdrop-blur-3xl" />
    </div>
  )
}
