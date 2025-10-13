import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    // English content - separate collections for each page
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
    }),
    shipping_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/shipping.yml',
        prefix: '',
      },
    }),
    sizeguide_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/sizeguide.yml',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
          alt: z.string(),
          ctaButton: z.string(),
          ctaLink: z.string(),
        }),
        measurementGuide: z.object({
          title: z.string(),
          description: z.string(),
          measurements: z.array(
            z.object({
              icon: z.string(),
              title: z.string(),
              description: z.string(),
            })
          ),
          tip: z.object({
            title: z.string(),
            description: z.string(),
          }),
        }),
        bodyTypes: z.object({
          title: z.string(),
          description: z.string(),
          types: z.array(
            z.object({
              name: z.string(),
              description: z.string(),
              gradient: z.string(),
              borderRadius: z.string(),
              measurements: z.object({
                bust: z.string(),
                underbust: z.string(),
                waist: z.string(),
                hips: z.string(),
              }),
              recommendedSize: z.string(),
              cupSize: z.string(),
            })
          ),
          tip: z.object({
            title: z.string(),
            description: z.string(),
          }),
        }),
        sizeGuides: z.object({
          title: z.string(),
          description: z.string(),
          tabs: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              icon: z.string(),
            })
          ),
          womensSwim: z.object({
            title: z.string(),
            description: z.string(),
            sizeChart: z.object({
              headers: z.array(z.string()),
              sizes: z.array(
                z.object({
                  size: z.string(),
                  bust: z.string(),
                  underbust: z.string(),
                  cup: z.string(),
                  waist: z.string(),
                  hips: z.string(),
                  us: z.string(),
                  ukAu: z.string(),
                })
              ),
            }),
            cupSizeGuide: z.object({
              title: z.string(),
              headers: z.array(z.string()),
              sizes: z.array(
                z.object({
                  cup: z.string(),
                  diffCm: z.string(),
                  diffInch: z.string(),
                })
              ),
            }),
          }),
        }),
        platformOptimization: z.object({
          title: z.string(),
          description: z.string(),
          platforms: z.array(
            z.object({
              name: z.string(),
              subtitle: z.string(),
              icon: z.string(),
              description: z.string(),
              features: z.array(z.string()),
              ctaText: z.string(),
              ctaLink: z.string(),
            })
          ),
          tip: z.object({
            title: z.string(),
            description: z.string(),
          }),
        }),
        consultation: z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
          primaryButton: z.object({
            text: z.string(),
            link: z.string(),
          }),
          secondaryButton: z.object({
            text: z.string(),
            link: z.string(),
          }),
          contact: z.object({
            email: z.string(),
            phone: z.string(),
          }),
          features: z.array(
            z.object({
              icon: z.string(),
              title: z.string(),
              description: z.string(),
            })
          ),
        }),
      }),
    }),
    catalog_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/catalog/**',
        prefix: '',
      },
    }),
    products_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/products/**',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
        }),
        filters: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            options: z.array(
              z.object({
                value: z.string(),
                label: z.string(),
              })
            ),
          })
        ),
        products: z.array(
          z.object({
            id: z.number(),
            name: z.string(),
            href: z.string(),
            description: z.string(),
            imageSrc: z.string(),
            imageAlt: z.string(),
          })
        ),
      }),
    }),
    home_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/home.yml',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
          src: z.string(),
          alt: z.string(),
          ctaButton: z.string(),
          features: z.array(
            z.object({
              text: z.string(),
            })
          ),
        }),
        videoShowcase: z.object({
          title: z.string(),
          description: z.string(),
          ctaText: z.string(),
          videoSrc: z.string(),
        }),
        howWorks: z.object({
          title: z.string(),
          description: z.string(),
          cta: z.string(),
          steps: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              icon: z.string(),
            })
          ),
        }),
        whyUs: z.object({
          title: z.string(),
          description: z.string(),
          cta: z.string(),
          advantages: z.array(
            z.object({
              name: z.string(),
              description: z.string(),
              icon: z.string(),
            })
          ),
        }),
        indexCta: z.object({
          title: z.string(),
          description: z.string(),
          cta: z.string(),
          image: z.object({
            src: z.string(),
            alt: z.string(),
          }),
        }),
        products: z.object({
          title: z.string(),
          description: z.string(),
          learnMoreText: z.string(),
          quoteText: z.string(),
          learnMoreLink: z.string(),
          quoteLink: z.string(),
          items: z.array(
            z.object({
              id: z.number(),
              name: z.string(),
              href: z.string(),
              description: z.string(),
              imageSrc: z.string(),
              imageAlt: z.string(),
            })
          ),
        }),
        serviceAdvantages: z.object({
          title: z.string(),
          description: z.string(),
          advantages: z.array(
            z.object({
              id: z.number(),
              title: z.string(),
              description: z.string(),
              icon: z.string(),
            })
          ),
        }),
        contactForm: z.object({
          modalTitle: z.string(),
          nameLabel: z.string(),
          namePlaceholder: z.string(),
          emailLabel: z.string(),
          emailPlaceholder: z.string(),
          messageLabel: z.string(),
          messagePlaceholder: z.string(),
          consentText: z.string(),
          submitButton: z.string(),
          successMessage: z.string(),
          errorMessage: z.string(),
        }),
      }),
    }),
    about_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/about.yml',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
        }),
        quote: z.object({
          text: z.string(),
          author: z.object({
            name: z.string(),
            handle: z.string(),
            avatar: z.string(),
          }),
        }),
        content: z.object({
          intro: z.string(),
          features: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              icon: z.string(),
            })
          ),
          mission: z.string(),
          commitment: z.object({
            title: z.string(),
            description: z.string(),
          }),
        }),
      }),
    }),
    sampling_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/sampling.yml',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
          ctaButton: z.string(),
          ctaLink: z.string(),
        }),
        comparison: z.object({
          title: z.string(),
          description: z.string(),
          criteria: z.array(
            z.object({
              name: z.string(),
              standard: z.string(),
              expert: z.string(),
            })
          ),
        }),
        process: z.object({
          title: z.string(),
          description: z.string(),
          steps: z.array(
            z.object({
              number: z.number(),
              title: z.string(),
              description: z.string(),
            })
          ),
        }),
        faq: z.object({
          title: z.string(),
          items: z.array(
            z.object({
              question: z.string(),
              answer: z.string(),
            })
          ),
        }),
        cta: z.object({
          title: z.string(),
          description: z.string(),
          button: z.string(),
          link: z.string(),
        }),
      }),
    }),
    bulk_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/bulk.yml',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
        }),
        intro: z.object({
          text: z.string(),
        }),
        process: z.object({
          title: z.string(),
          steps: z.array(
            z.object({
              icon: z.string(),
              title: z.string(),
              description: z.string(),
            })
          ),
        }),
        sustainability: z.object({
          title: z.string(),
          description: z.string(),
          features: z.array(
            z.object({
              icon: z.string(),
              title: z.string(),
              description: z.string(),
            })
          ),
        }),
        cta: z.object({
          title: z.string(),
          description: z.string(),
          form: z.object({
            nameLabel: z.string(),
            namePlaceholder: z.string(),
            emailLabel: z.string(),
            emailPlaceholder: z.string(),
            messageLabel: z.string(),
            messagePlaceholder: z.string(),
            consentText: z.string(),
            submitButton: z.string(),
            successMessage: z.string(),
            browseText: z.string(),
            browseLink: z.string(),
          }),
        }),
        meta: z.object({
          title: z.string(),
          description: z.string(),
        }),
      }),
    }),
    terms_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/terms.yml',
        prefix: '',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        sections: z.object({
          contract_formation: z.object({
            title: z.string(),
            content: z.string(),
          }),
          payment_terms: z.object({
            title: z.string(),
            content: z.string(),
          }),
          shipping: z.object({
            title: z.string(),
            content: z.string(),
          }),
          cancellations: z.object({
            title: z.string(),
            content: z.string(),
          }),
          pricing: z.object({
            title: z.string(),
            content: z.string(),
          }),
          bulk_orders: z.object({
            title: z.string(),
            content: z.string(),
          }),
          claims_returns: z.object({
            title: z.string(),
            content: z.string(),
          }),
          confidentiality: z.object({
            title: z.string(),
            subsections: z.object({
              definition: z.object({
                title: z.string(),
                content: z.string(),
              }),
              obligations: z.object({
                title: z.string(),
                content: z.string(),
              }),
              protection: z.object({
                title: z.string(),
                content: z.string(),
              }),
              duration: z.object({
                title: z.string(),
                content: z.string(),
              }),
              exceptions: z.object({
                title: z.string(),
                content: z.string(),
              }),
              breach: z.object({
                title: z.string(),
                content: z.string(),
              }),
              return_destruction: z.object({
                title: z.string(),
                content: z.string(),
              }),
            }),
          }),
        }),
        footer: z.object({
          consultation: z.string(),
        }),
      }),
    }),
    layout_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/setting/navigation.yml',
        prefix: '',
      },
      schema: z.object({
        tideHeader: z.object({
          categories: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              featured: z.array(
                z.object({
                  name: z.string(),
                  href: z.string(),
                  imageSrc: z.string(),
                  imageAlt: z.string(),
                })
              ),
              sections: z.array(
                z.object({
                  id: z.string(),
                  name: z.string(),
                  items: z.array(
                    z.object({
                      name: z.string(),
                      href: z.string(),
                    })
                  ),
                })
              ),
            })
          ),
          pages: z.array(
            z.union([
              z.object({
                name: z.string(),
                href: z.string(),
              }),
              z.object({
                id: z.string(),
                name: z.string(),
                featured: z.array(
                  z.object({
                    name: z.string(),
                    href: z.string(),
                    imageSrc: z.string(),
                    imageAlt: z.string(),
                  })
                ),
                sections: z.array(
                  z.object({
                    id: z.string(),
                    name: z.string(),
                    items: z.array(
                      z.object({
                        name: z.string(),
                        href: z.string(),
                      })
                    ),
                  })
                ),
              }),
            ])
          ),
        }),
        footer: z.object({
          banner: z.string(),
          contact: z.object({
            whatsapp: z.string(),
            emailLabel: z.string(),
            email: z.string(),
            addressLabel: z.string(),
            address: z.string(),
          }),
          sections: z.object({
            solutions: z.object({
              title: z.string(),
              items: z.array(
                z.object({
                  title: z.string(),
                  href: z.string(),
                })
              ),
            }),
            company: z.object({
              title: z.string(),
              items: z.array(
                z.object({
                  title: z.string(),
                  href: z.string(),
                })
              ),
            }),
            contact: z.object({
              title: z.string(),
              items: z.array(
                z.object({
                  title: z.string(),
                  href: z.string(),
                })
              ),
            }),
          }),
          slogan: z.string(),
          copyright: z.string(),
        }),
      }),
    }),
    marketing_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/marketing.yml',
        prefix: '',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        items: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            image: z.string(),
          })
        ),
      }),
    }),
    collections_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/collections/**',
        prefix: '',
      },
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        marketing: z.object({
          title: z.string(),
          description: z.string(),
          items: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              image: z.string(),
            })
          ),
        }),
        subcategories: z.array(
          z.object({
            name: z.string(),
            href: z.string(),
            products: z.array(
              z.object({
                title: z.string(),
                description: z.string(),
                imageSrc: z.string(),
                imageAlt: z.string(),
                href: z.string(),
              })
            ),
          })
        ),
      }),
    }),
    pricing_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/pricing.yml',
        prefix: '',
      },
    }),
    faq_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/faq.yml',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
        }),
        faq: z.object({
          title: z.string(),
          items: z.array(
            z.object({
              question: z.string(),
              answer: z.string(),
            })
          ),
        }),
        cta: z.object({
          title: z.string(),
          description: z.string(),
          button: z.string(),
          link: z.string(),
        }),
        seo: z
          .object({
            title: z.string(),
            description: z.string(),
            ogTitle: z.string(),
            ogDescription: z.string(),
            ogImage: z.string(),
            twitterCard: z.string(),
          })
          .optional(),
      }),
    }),
    fabric_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/fabric.yml',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
          alt: z.string(),
          ctaButton: z.string(),
          ctaLink: z.string(),
        }),
        features: z.object({
          title: z.string(),
          description: z.string(),
          items: z.array(
            z.object({
              id: z.number(),
              title: z.string(),
              description: z.string(),
              icon: z.string(),
            })
          ),
        }),
        catalog: z.object({
          title: z.string(),
          description: z.string(),
          viewButtonText: z.string(),
          note: z.string(),
          pdfs: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              file: z.string(),
              fileInfo: z.string(),
              features: z.array(z.string()),
              gradient: z.string(),
              iconBg: z.string(),
              buttonClass: z.string(),
              accentLine: z.string(),
            })
          ),
        }),
        whyChoose: z.object({
          title: z.string(),
          description: z.string(),
          reasons: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            })
          ),
        }),
        cta: z.object({
          title: z.string(),
          description: z.string(),
          button: z.string(),
          link: z.string(),
        }),
        seo: z
          .object({
            title: z.string(),
            description: z.string(),
            ogTitle: z.string(),
            ogDescription: z.string(),
            ogImage: z.string(),
            twitterCard: z.string(),
          })
          .optional(),
      }),
    }),
    branding_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/branding.yml',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
          alt: z.string(),
        }),
        introduction: z.object({
          title: z.string(),
          description: z.string(),
          features: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              icon: z.string(),
              gradient: z.string(),
            })
          ),
        }),
        labels: z.object({
          title: z.string(),
          description: z.string(),
          types: z.array(
            z.object({
              id: z.number(),
              name: z.string(),
              nameChinese: z.string(),
              icon: z.string(),
              gradient: z.string(),
              technology: z.string(),
              advantages: z.string(),
              bestFor: z.string(),
            })
          ),
        }),
        packaging: z.object({
          badge: z.string(),
          title: z.string(),
          description: z.string(),
          features: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              icon: z.string(),
              gradient: z.string(),
            })
          ),
          types: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              icon: z.string(),
              gradient: z.string(),
            })
          ),
          impact: z.object({
            title: z.string(),
            description: z.string(),
            stats: z.array(
              z.object({
                value: z.string(),
                label: z.string(),
              })
            ),
          }),
        }),
        cta: z.object({
          title: z.string(),
          description: z.string(),
          button: z.string(),
          link: z.string(),
          variant: z.string(),
        }),
        seo: z
          .object({
            title: z.string(),
            description: z.string(),
            keywords: z.string(),
            ogTitle: z.string(),
            ogDescription: z.string(),
            ogType: z.string(),
            twitterCard: z.string(),
            twitterTitle: z.string(),
            twitterDescription: z.string(),
          })
          .optional(),
      }),
    }),
    hardware_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/hardware.yml',
        prefix: '',
      },
    }),
    startup_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/startup.yml',
        prefix: '',
      },
      schema: z.object({
        seo_title: z.string(),
        seo_description: z.string(),
        seo_image: z.string(),
        hero: z.object({
          badge: z.string(),
          title: z.string(),
          description: z.string(),
        }),
        company: z.object({
          introduction: z.string(),
          benefits: z.string(),
        }),
        features: z.array(
          z.object({
            id: z.number(),
            title: z.string(),
            description: z.string(),
          })
        ),
        success: z.object({
          title: z.string(),
          description: z.string(),
        }),
        quote: z.object({
          text: z.string(),
          company: z.string(),
          role: z.string(),
          avatar: z.string(),
        }),
        cta: z.object({
          text: z.string(),
          description: z.string(),
        }),
        image: z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string(),
        }),
        services: z.object({
          title: z.string(),
          description: z.string(),
          cta: z.string(),
        }),
        contact: z.object({
          title: z.string(),
          form: z.object({
            firstName: z.string(),
            email: z.string(),
            message: z.string(),
            submit: z.string(),
            terms: z.object({
              text: z.string(),
              link: z.string(),
            }),
          }),
        }),
        testimonial: z.object({
          quote: z.string(),
          name: z.string(),
          title: z.string(),
          avatar: z.string(),
        }),
      }),
    }),
    forbrand_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/forbrand.yml',
        prefix: '',
      },
      schema: z.object({
        seo_title: z.string(),
        seo_description: z.string(),
        seo_image: z.string(),
        hero: z.object({
          badge: z.string(),
          title: z.string(),
          intro: z.string(),
          description: z.string(),
        }),
        why_choose: z.object({
          title: z.string(),
          items: z.array(
            z.object({
              id: z.number(),
              title: z.string(),
              description: z.string(),
            })
          ),
        }),
        what_sets_apart: z.object({
          title: z.string(),
          features: z.array(
            z.object({
              icon: z.string(),
              name: z.string(),
              benefit: z.string(),
            })
          ),
        }),
        success_stories: z.object({
          title: z.string(),
          testimonials: z.array(
            z.object({
              id: z.number(),
              quote: z.string(),
              author: z.string(),
              avatar: z.string(),
            })
          ),
        }),
        how_we_work: z.object({
          title: z.string(),
          steps: z.array(
            z.object({
              id: z.number(),
              text: z.string(),
            })
          ),
        }),
        partnership: z.object({
          title: z.string(),
          description: z.string(),
          cta_text: z.string(),
        }),
        image: z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string(),
        }),
      }),
    }),

    // Other languages - general collections
    content_ar: defineCollection({
      type: 'page',
      source: {
        include: 'ar/**',
        prefix: '',
      },
    }),
    content_de: defineCollection({
      type: 'page',
      source: {
        include: 'de/**',
        prefix: '',
      },
    }),
    content_es: defineCollection({
      type: 'page',
      source: {
        include: 'es/**',
        prefix: '',
      },
    }),
    content_fr: defineCollection({
      type: 'page',
      source: {
        include: 'fr/**',
        prefix: '',
      },
    }),
    content_hi: defineCollection({
      type: 'page',
      source: {
        include: 'hi/**',
        prefix: '',
      },
    }),
    content_it: defineCollection({
      type: 'page',
      source: {
        include: 'it/**',
        prefix: '',
      },
    }),
    content_ja: defineCollection({
      type: 'page',
      source: {
        include: 'ja/**',
        prefix: '',
      },
    }),
    content_ko: defineCollection({
      type: 'page',
      source: {
        include: 'ko/**',
        prefix: '',
      },
    }),
    content_pt: defineCollection({
      type: 'page',
      source: {
        include: 'pt/**',
        prefix: '',
      },
    }),
    content_ru: defineCollection({
      type: 'page',
      source: {
        include: 'ru/**',
        prefix: '',
      },
    }),
    content_zh: defineCollection({
      type: 'page',
      source: {
        include: 'zh/**',
        prefix: '',
      },
    }),
  },
});
