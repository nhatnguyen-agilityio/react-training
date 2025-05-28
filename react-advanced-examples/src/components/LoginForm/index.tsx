import { maxLength, minLength, object, regex, string, pipe, type InferOutput, boolean } from 'valibot';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
// import UserIcon from '@assets/user.svg';
import userIcon from '@/assets/user.svg';
import passwordIcon from '@/assets/password.svg';

// type LoginForm = {
//   username: string;
//   password: string;
// }

const LoginFormSchema = object({
  username: pipe(
    string(),
    minLength(2, 'Minimum length is 2'),
    maxLength(30, 'Maximum length is 30'),
    regex(/^(?!.*[_.]{2})[a-zA-Z0-9](?!.*[_.]{2})[a-zA-Z0-9._]{1,18}[a-zA-Z0-9]$/, 'Invalid username'),
  ),
  password: pipe(
    string(),
    minLength(8, 'Minimum length is 8'),
    maxLength(30, 'Maximum length is 30'),
    regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must be at least 8 characters long. Password must include at least one letter (a–z or A–Z).'),
  ),
  rememberMe: boolean(),
})

const LoginForm = () => {
  const form = useForm<InferOutput<typeof LoginFormSchema>>({
    resolver: valibotResolver(LoginFormSchema),
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false
    },
  })

  const onSubmit: SubmitHandler<InferOutput<typeof LoginFormSchema>> = data => {
    console.log(data);
  };

  return (
    <>
      <h2 className=" font-extrabold text-4xl mb-10 text-start">Sign in</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem className='mb-8'>
                <div className='relative'>
                  <img src={userIcon} width={15} height={15} alt="User Icon" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <FormControl>
                    <Input id="username" {...field} className='pl-10 h-17' placeholder='Enter Username' />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem className='mb-8'>
                <div className='relative'>
                  <img src={passwordIcon} width={15} height={15} alt="User Icon" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <FormControl>
                    <Input id="password" {...field} type='password' className='pl-10 h-17' placeholder='Enter Password' />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="rememberMe"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="remember"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      ref={field.ref}
                      name={field.name}
                    />
                  </FormControl>
                  <FormLabel htmlFor="remember">Remember me</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-start mt-8">
            <Button type="submit" className="bg-button-primary w-35 h-19 text-base">
              Login
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
};

export default LoginForm;
