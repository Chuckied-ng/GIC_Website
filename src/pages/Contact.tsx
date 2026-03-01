import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  company: z.string().min(2, 'Company name is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setSubmitStatus('success');
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm text-gray-500 tracking-wide">Get In Touch</span>
            <h1 className="text-5xl lg:text-6xl font-light text-slate-900 mt-4 leading-tight">
              Let's Discuss
              <br />
              <span className="italic">Your Project</span>
            </h1>
            <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
              Connect with our technical team to explore how we can support your next 
              oil & gas infrastructure project with proven EPCI capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-light text-slate-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Head Office</div>
                      <div className="text-gray-600 text-sm">
                        Plot 123, Industrial Area<br />
                        Trans Amadi, Port Harcourt<br />
                        Rivers State, Nigeria
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Phone</div>
                      <div className="text-gray-600 text-sm">
                        +234 (0) 123 456 7890<br />
                        +234 (0) 987 654 3210
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Email</div>
                      <div className="text-gray-600 text-sm">
                        info@gicoilgas.com<br />
                        projects@gicoilgas.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Business Hours</div>
                      <div className="text-gray-600 text-sm">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Offices */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-medium text-slate-900 mb-4">Regional Offices</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <div className="font-medium text-slate-900">Lagos Office</div>
                    <div>Victoria Island, Lagos</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Warri Office</div>
                    <div>Effurun, Delta State</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Abuja Office</div>
                    <div>Central Business District, Abuja</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200">
                <h2 className="text-2xl font-light text-slate-900 mb-8">Send us a message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-green-900">Message sent successfully!</div>
                      <div className="text-sm text-green-700">We'll get back to you within 24 hours.</div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-red-900">Error sending message</div>
                      <div className="text-sm text-red-700">Please try again or contact us directly.</div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-900 mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        {...register('name')}
                        className="bg-gray-50 border-gray-200 rounded-xl"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-slate-900 mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="bg-gray-50 border-gray-200 rounded-xl"
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-slate-900 mb-2 block">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        {...register('phone')}
                        className="bg-gray-50 border-gray-200 rounded-xl"
                        placeholder="+234 123 456 7890"
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-slate-900 mb-2 block">
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        {...register('company')}
                        className="bg-gray-50 border-gray-200 rounded-xl"
                        placeholder="Company Ltd."
                      />
                      {errors.company && (
                        <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-slate-900 mb-2 block">
                      Service Interest *
                    </Label>
                    <Select onValueChange={(value) => setValue('service', value)}>
                      <SelectTrigger className="bg-gray-50 border-gray-200 rounded-xl">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering Services</SelectItem>
                        <SelectItem value="procurement">Procurement</SelectItem>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="marine">Marine & Offshore</SelectItem>
                        <SelectItem value="epc">Full EPCI Package</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-red-600 text-sm mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-900 mb-2 block">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      className="bg-gray-50 border-gray-200 rounded-xl min-h-[150px]"
                      placeholder="Please provide details about your project requirements, timeline, and any specific technical considerations..."
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                    <span className="ml-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
