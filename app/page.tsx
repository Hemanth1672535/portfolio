"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  GraduationCap,
  Code,
  Database,
  Cloud,
  Award,
  Briefcase,
  Calendar,
  Target,
  BookOpen,
  Wrench,
  FolderOpen,
  BadgeIcon as Certificate,
  Users,
  MessageCircle,
  Clock,
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto mb-6">
                <img
                  src="/images/hemanth-profile.jpg"
                  alt="Mupparaju Hemanth Kumar - Profile Photo"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-lg"
                />
              </div>
              <h1 className="text-5xl font-bold mb-4">Mupparaju Hemanth Kumar</h1>
              <p className="text-xl text-blue-100 mb-6">Aspiring Data Science Professional</p>
              <p className="text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed">
                B.Tech AI &amp; Data Science Student | Python Developer 
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <Button
                variant="secondary"
                size="lg"
                className="gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
                asChild
              >
                <a href="mailto:hemanth1672535@gmail.com">
                  <Mail className="w-5 h-5" />
                  hemanth1672535@gmail.com
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
                asChild
              >
                <a href="tel:+919391941256">
                  <Phone className="w-5 h-5" />
                  +91-9391941256
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
                asChild
              >
                <a href="https://github.com/hemanth1672535" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/hemanth-kumar-249546226/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Career Objective */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Objective</h2>
            </div>
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Aspiring data science professional seeking to leverage my knowledge and skills in Python, databases,
                  and data analytics to solve real-world problems. Eager to contribute to innovative projects, gain
                  practical experience, and grow in a dynamic organization that fosters learning and professional
                  development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-600">
                        B.Tech Artificial Intelligence & Data Science
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">
                        Koneru Lakshmaiah Education Foundation
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      2021 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-600">CGPA: 9.27</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-600">Intermediate Education</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">
                        Narayana Junior College
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      2019 - 2021
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-600">Percentage: 88%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-600">Secondary Education</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">Narayana School</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      2018 - 2019
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-600">CGPA: 9.7</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Java", "HTML", "CSS", "JavaScript"].map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["SQL", "MongoDB"].map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Cloud className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Developer Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "AWS"].map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Additional Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Tableau", "Power BI", "Excel"].map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <FolderOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-blue-600">Car Rental System</CardTitle>
                    <Badge variant="secondary">Jan 2024 - Apr 2024</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>4 months duration</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">PHP</Badge>
                      <Badge variant="outline">Laravel</Badge>
                      <Badge variant="outline">MySQL</Badge>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Collaborated within a team to develop a fully functional blog management system using PHP,
                          Laravel framework, and MySQL technologies
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Enhanced data accuracy by implementing Eloquent ORM and Laravel's built-in database features,
                          achieving 95% accuracy
                        </span>
                      </li>
                    </ul>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                      <a href="https://github.com/hemanth1672535" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View Repository
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-blue-600">Movie Ticket Reservation System</CardTitle>
                    <Badge variant="secondary">Sep 2023 - Dec 2023</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>4 months duration</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">RESTful API</Badge>
                      <Badge variant="outline">Payment Gateway</Badge>
                      <Badge variant="outline">Authentication</Badge>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Collaborated with team members to implement user authentication and authorization features
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Utilized RESTful API principles to integrate third-party payment gateways for seamless online
                          transactions
                        </span>
                      </li>
                    </ul>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                      <a href="https://github.com/hemanth1672535" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View Repository
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Certificate className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card
                className="hover:shadow-lg transition-shadow text-center cursor-pointer"
                onClick={() => window.open("/certificates/python-data-science.pdf", "_blank")}
              >
                <CardContent className="p-6">
                  <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900">Python for Data Science</h3>
                  <p className="text-sm text-gray-600 mt-2">Click to view certificate</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <Cloud className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900">
                    Microsoft Certified: Azure Developer Associate
                  </h3>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <Cloud className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900">Google cloud: Associate Cloud Engineer </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Internships */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Virtual Internships</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "AWS Academy Cloud Foundations", icon: Cloud, color: "text-orange-600" },
                { name: "AWS Academy Machine Learning", icon: Code, color: "text-blue-600" },
              ].map((internship, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <internship.icon className={`w-12 h-12 ${internship.color}`} />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{internship.name}</h3>
                      <p className="text-gray-600">Amazon Web Services</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Soft Skills</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Effective Communication", icon: MessageCircle, color: "text-blue-600" },
                { name: "Team Work", icon: Users, color: "text-green-600" },
                { name: "Time Management", icon: Clock, color: "text-purple-600" },
              ].map((skill, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <skill.icon className={`w-12 h-12 ${skill.color} mx-auto mb-4`} />
                    <h3 className="font-semibold text-lg text-gray-900">{skill.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to collaborate on exciting data science projects and innovative solutions
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <a href="mailto:hemanth1672535@gmail.com" className="block">
                    <Mail className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Personal Email</h3>
                    <p className="text-blue-100 hover:text-white transition-colors">hemanth1672535@gmail.com</p>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <a href="mailto:2100080119ai.ds@gmail.com" className="block">
                    <Mail className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Academic Email</h3>
                    <p className="text-blue-100 hover:text-white transition-colors">2100080119ai.ds@gmail.com</p>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <a href="tel:+919391941256" className="block">
                    <Phone className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-blue-100 hover:text-white transition-colors">+91-9391941256</p>
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button variant="secondary" size="lg" className="gap-2" asChild>
                <a href="https://github.com/hemanth1672535" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="gap-2" asChild>
                <a
                  href="https://www.linkedin.com/in/hemanth-kumar-249546226/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Mupparaju Hemanth Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
