import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of Product Management: How AI is Changing the Game",
      excerpt:
        "Explore how artificial intelligence is revolutionizing product management workflows and what it means for PMs in 2025.",
      author: "Ridam",
      date: "June 1, 2025",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
      category: "AI & Product Management",
    },
    {
      title: "10 PRD Templates That Will Save You Hours Every Week",
      excerpt: "Download our collection of battle-tested PRD templates used by top product teams at unicorn startups.",
      author: "Sarah Chen",
      date: "May 28, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400",
      category: "Templates & Resources",
    },
    {
      title: "From Feedback Chaos to Actionable Insights: A PM's Guide",
      excerpt:
        "Learn how to systematically analyze user feedback and turn it into product decisions that drive growth.",
      author: "Marcus Rodriguez",
      date: "May 25, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
      category: "User Research",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights for Product Managers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with the latest trends, templates, and best practices in product management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-college-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 leading-tight">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Button variant="ghost" size="sm" className="text-college-blue hover:text-college-blue-dark">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-college-blue text-college-blue hover:bg-college-gray">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
