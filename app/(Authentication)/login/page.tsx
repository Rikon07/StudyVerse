// import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


// export default function LoginPage() {
//   return (
//     <Card>
//         <CardHeader>
//             <CardTitle className="text-xl">Welcome Bhai</CardTitle>
//             <CardDescription>Login with your Github</CardDescription>
//         </CardHeader>
//     </Card>
//   )
// }
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  )
}
