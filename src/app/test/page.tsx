{postData.map((items, i) => (
  <div key={i}>

      <div className='bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl'>
          <div className="relative rounded-3xl">
              <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto clipPath" />
              <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                  <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
              </div>
          </div>

          <div className="px-3">
              <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
              <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

              <div>
                  <h3 className='text-base font-normal pt-6 opacity-75'>{items.name}</h3>
              </div>

              <div className="flex justify-between items-center py-6">
                  <div className="flex gap-4">
                      <h3 className="text-red text-22xl font-medium">{items.rating}</h3>
                     
                  </div>
                  <div>
                      <h3 className="text-3xl font-medium">${items.price}</h3>
                  </div>
              </div>

              <hr style={{ color: "#C4C4C4" }} />

              <div className="flex justify-between pt-6">
                  <div className="flex gap-4">
                      <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                      <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3>
                  </div>
                  <div className="flex gap-4">
                      <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                      <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>
                  </div>
              </div>
          </div>
      </div>
  </div>
))}